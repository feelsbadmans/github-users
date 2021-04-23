export const getArrayPages = (pagesCount: number, currentPage: number) => {
    let pages = [];
    if (pagesCount > 5) {
        if (currentPage > 3) {
            if (currentPage > pagesCount - 3) {
                for (let i = pagesCount - 4; i <= pagesCount; i++) pages.push(i);
            }
            else {
                for (let i = currentPage - 2; i <= currentPage + 2; i++) pages.push(i);
            }
        }
        else {
            for (let i = 1; i <= 5; i++) pages.push(i);
        }
    }
    else {
        for (let i = 1; i <= pagesCount; i++) pages.push(i);
    }
    return pages;
}