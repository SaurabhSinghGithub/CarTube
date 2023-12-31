import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, model, limit, fuel } = filters;

    const headers: HeadersInit = {
        "X-RapidAPI-Key": '7a4461ae4dmsh46431595eb2546fp15c568jsn856a1bc6139e' || "",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    // Set the required headers for the API request
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers: headers,
        }
    );

    // Parse the response as JSON
    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = () => {
    const url = new URL("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");

    return `${url}`;
}



export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);

    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};











// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//     const url = new URL("https://cdn.imagin.studio/getimage");
//     const { make, model, year } = car;

//     url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//     url.searchParams.append('make', make);
//     url.searchParams.append('modelFamily', model.split(" ")[0]);
//     url.searchParams.append('zoomType', 'fullscreen');
//     url.searchParams.append('modelYear', `${year}`);
//     url.searchParams.append('angle', `${angle}`);


//     return `${url}`;
// }



 // const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '7a4461ae4dmsh46431595eb2546fp15c568jsn856a1bc6139e',
    //         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    //     }
    // };

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }