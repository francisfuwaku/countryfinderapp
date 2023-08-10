import { NavLink } from "react-router-dom";
import CardComponent from "../../components/card_component/CardComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";
import FilterComponent from "../../components/filter_region_component/FilterComponent";
import { useDataProvider } from "../../context_data/useDataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";

const AllCountryPage = () => {
    const countryData = useDataProvider();
    const theme = useThemeProvider();

    //get data from context
    const data = countryData?.data;

    if (!data) {
        return (
            <div
                className="mt-20 font-extrabold min-h-screen p-36 "
                style={theme.theme}
            >
                <div className="mt-20 lg:mx-[750px]">
                    <div className="animate-ping rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-100 lg:h-32 lg:w-32  lg:border-t-8 lg:border-b-8"></div>
                    <p className="-mt-10 lg:-mt-20 lg:ml-6">Loading</p>
                </div>
            </div>
        );
    }

    return (
        <section
            className="py-56 h-full lg:h-full lg:pb-[25%]"
            style={theme.theme}
        >
            <SearchBarComponent />
            <FilterComponent />

            <div className="grid mt-14 ml-14 grid-cols-1 gap-[120px] md:grid-cols-2 lg:grid-cols-4 lg:mt-10 lg:mx-[160px]">
                {data.length > 0 ? (
                    data?.map((country: any, index: number) => (
                        <NavLink
                            to={{ pathname: "/details" }}
                            state={country}
                            key={index}
                        >
                            <CardComponent data={country} />
                        </NavLink>
                    ))
                ) : (
                    <div className=" -m-10 p-[10px]   max-w-sm w-full lg:mt-[120px] ">
                        <div className="animate-pulse my-20 flex space-x-4 lg:my-20">
                            <div className="flex-1 space-y-6 py-1">
                                <div className=" rounded">No Country Found</div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllCountryPage;
