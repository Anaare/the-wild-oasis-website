import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

/* Disable static rendering and cache; regenerate on every request
 Useful when data must always be fresh. */
export const revalidate = 3600; //secs

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  const { capacity } = await searchParams;
  const filter = capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      {/* 
        Data fetching is isolated in a separate component.
        <Suspense> wraps only that part to avoid affecting static content above. 
      */}

      <Suspense fallback={<Spinner />}>
        {/* Passing key={filter} ensures that the component remounts when filter changes, forcing data re-fetching — therefore filtering is faster */}
        <CabinList filter={filter} key={filter} />
      </Suspense>
    </div>
  );
}
