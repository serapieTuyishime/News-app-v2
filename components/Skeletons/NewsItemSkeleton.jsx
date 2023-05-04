import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsItemSkeleton = () => {
    return (
        <div className="flex w-full gap-3 p-2 overflow-hidden pb-3 mt-3 max-h-60">
            <div className="grid w-3/5 gap-2">
                <div className="flex w-full justify-between items-start gap-2">
                    <div className="flex w-full items-center gap-3 ">
                        <div className="h-12 w-12">
                            <Skeleton className="h-full" />
                        </div>
                        <div className="w-4/5 h-12">
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                    <div className="h-4 w-24">
                        <Skeleton className="h-full" />
                    </div>
                </div>
                <div className="grid">
                    <span className="">
                        <Skeleton height={80} />
                    </span>
                    <span className="">
                        <Skeleton height={40} />
                    </span>
                </div>
            </div>
            <div className="w-2/5">
                <Skeleton height={300} />
            </div>
        </div>
    );
};

export default NewsItemSkeleton;
