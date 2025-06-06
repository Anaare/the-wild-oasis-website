"use server";

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  //   1. User that uses action has AUTHORIZATION to do so
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  //   2. Input field are always treated as UNSAFE
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session?.user?.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
  redirect("/account/profile");
}
