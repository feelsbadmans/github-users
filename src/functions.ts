export const getPerPage = (height: number) => {
    if (height > 800) return 8;
    else if (height > 600 && height <= 800) return 6;
    else if (height > 400 && height <= 600) return 4;
    else return 3;
}

export const getArrayPages = (pagesCount: number, currentPage: number) => {
    let pages = [];
    if (pagesCount > 10) {
        if (currentPage > 5) {
            if (currentPage > pagesCount - 5) {
                for (let i = pagesCount - 9; i <= pagesCount; i++) pages.push(i);
            }
            else {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) pages.push(i);
            }
        }
        else {
            for (let i = 1; i <= 10; i++) pages.push(i);
        }
    }
    else {
        for (let i = 1; i <= pagesCount; i++) pages.push(i);
    }
    return pages;
}