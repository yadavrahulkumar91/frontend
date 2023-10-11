const handleLogin = async (username, password) => {
    try {
        // Send a POST request to the Strapi authentication endpoint to log in.
        const response = await fetch('https://your-strapi-api.com/auth/local', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: username,
                password: password,
            }),
        });

        if (response.status === 200) {
            const data = await response.json();
            // Store the user token in local storage or in a state variable.
            localStorage.setItem('token', data.jwt);
            // Fetch user data and update the user state (as shown in the previous example).
            fetchUserData();
        } else {
            // Handle login failure, show error message, etc.
            console.error('Login failed.');
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};
