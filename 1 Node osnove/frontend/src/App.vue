<template>
    <div id="app">
        <p>{{ message }}</p>
        <p>{{ messageDatum }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "",
            messageDatum: "",
        };
    },

    methods: {
        // WA-103
        fetchData() {
            console.log("Fetching data...");
            // Make a GET request to the "/prognoza" endpoint on your backend
            fetch("http://localhost:3000/prognoza")
                .then((response) => {
                    // Handle the response from the server
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.text();
                })
                .then((data) => {
                    // Update the message with the response data
                    console.log("Received data:", data);
                    this.message = data;
                })
                .catch((error) => {
                    // Handle any errors that occur during the request
                    console.error("Error:", error);
                });
        },
        fetchDatum() {
            console.log("Fetching datum...");
            // Make a GET request to the "/prognoza" endpoint on your backend
            fetch("http://localhost:3000/datum")
                .then((response) => {
                    // Handle the response from the server
                    if (!response.ok) {
                        throw new Error(
                            "Network response for datum was not ok"
                        );
                    }
                    return response.text();
                })
                .then((data) => {
                    // Update the message with the response data
                    console.log("Received data:", data);
                    this.messageDatum = data;
                })
                .catch((error) => {
                    // Handle any errors that occur during the request
                    console.error("Error:", error);
                });
        },
    },

    mounted() {
        console.log("Component mounted.");
        this.fetchData();
        this.fetchDatum();
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
