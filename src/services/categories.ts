export const categoriesFetch = async() => {
    try{
        const response = await fetch(`${import.meta.env.VITE_PRODUCT_LIST_API}categories`);
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error("Error fetching categories");
    }
}