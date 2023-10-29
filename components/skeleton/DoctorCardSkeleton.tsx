import { Skeleton } from "../ui/skeleton";

const DoctorCardSkeleton = () => {
  return (
    <div className="w-[300px] rounded-lg border-2 dark:border-slate-800 border-slate-200">
      <Skeleton className="h-[300px] w-[300px] rounded-t-lg" />
      <div className="p-2 flex flex-col gap-2">
        <Skeleton className=" h-9 w-full" />
        <Skeleton className=" h-9 w-full" />
        <Skeleton className=" h-9 w-full" />
      </div>
    </div>
  );
};

export default DoctorCardSkeleton;
