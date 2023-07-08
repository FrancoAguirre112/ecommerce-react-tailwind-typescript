export const categoriesFetch = async() => {
    try{
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const json = await response.json();

        const categories = json;

        return categories;
    } catch (error) {
        throw new Error("Error fetching categories");
    }
}