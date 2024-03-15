import {API_URL} from "../apiConfig"


export const login = async (userAccount, userPassword) => {
    try {
        const formData = {
            username: userAccount,
            password: userPassword
        };
        const response = await fetch(`${API_URL}/token/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        const data = await response.json();
        return data; // 返回响应数据
    } catch (error) {
        console.error(error);
        throw error; // 将错误继续抛出
    }
};