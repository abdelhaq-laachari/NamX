export const token = localStorage.getItem("accessToken");

export const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
};