// fetch-tutorial.js

// ====================================
// 1. Basic GET Request
// ====================================
async function basicGet() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    const data = await response.json();

    console.log("\n1. Basic GET");
    console.log(data);
}

// ====================================
// 2. Check Status Code
// ====================================
async function statusCheck() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    console.log("\n2. Status Information");
    console.log("Status:", response.status);
    console.log("OK:", response.ok);
    console.log("Status Text:", response.statusText);
}

// ====================================
// 3. Read Headers
// ====================================
async function headersExample() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    console.log("\n3. Headers");

    response.headers.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}

// ====================================
// 4. POST Request
// ====================================
async function postRequest() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Node Fetch",
                body: "Learning Fetch",
                userId: 1
            })
        }
    );

    const data = await response.json();

    console.log("\n4. POST Request");
    console.log(data);
}

// ====================================
// 5. PUT Request
// ====================================
async function putRequest() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated Title",
                body: "Updated Body",
                userId: 1
            })
        }
    );

    const data = await response.json();

    console.log("\n5. PUT Request");
    console.log(data);
}

// ====================================
// 6. PATCH Request
// ====================================
async function patchRequest() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Partially Updated"
            })
        }
    );

    const data = await response.json();

    console.log("\n6. PATCH Request");
    console.log(data);
}

// ====================================
// 7. DELETE Request
// ====================================
async function deleteRequest() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "DELETE"
        }
    );

    console.log("\n7. DELETE Request");
    console.log("Status:", response.status);
}

// ====================================
// 8. Custom Headers
// ====================================
async function customHeaders() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            headers: {
                Authorization: "Bearer fake_token",
                "X-Custom-Header": "MyValue"
            }
        }
    );

    console.log("\n8. Custom Headers");
    console.log("Status:", response.status);
}

// ====================================
// 9. Query Parameters
// ====================================
async function queryParams() {
    const params = new URLSearchParams({
        userId: 1
    });

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?${params}`
    );

    const data = await response.json();

    console.log("\n9. Query Parameters");
    console.log(data.slice(0, 2));
}

// ====================================
// 10. Error Handling
// ====================================
async function errorHandling() {
    try {
        const response = await fetch(
            "https://invalid-url-123456.com"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("\n10. Error Handling");
        console.log(error.message);
    }
}

// ====================================
// 11. Timeout
// ====================================
async function timeoutExample() {
    const controller = new AbortController();

    setTimeout(() => {
        controller.abort();
    }, 1000);

    try {
        await fetch(
            "https://httpbin.org/delay/5",
            {
                signal: controller.signal
            }
        );
    } catch (error) {
        console.log("\n11. Timeout");
        console.log(error.name);
    }
}

// ====================================
// 12. Download Text
// ====================================
async function textResponse() {
    const response = await fetch(
        "https://www.example.com"
    );

    const text = await response.text();

    console.log("\n12. Text Response");
    console.log(text.substring(0, 100));
}

// ====================================
// 13. Download JSON
// ====================================
async function jsonResponse() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log("\n13. JSON Response");
    console.log(users[0]);
}

// ====================================
// 14. Parallel Requests
// ====================================
async function parallelRequests() {
    const [post, user] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
        fetch("https://jsonplaceholder.typicode.com/users/1")
    ]);

    const postData = await post.json();
    const userData = await user.json();

    console.log("\n14. Parallel Requests");
    console.log(postData.title);
    console.log(userData.name);
}

// ====================================
// 15. Upload JSON API Request
// ====================================
async function apiExample() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "API Practice",
                    body: "Node Fetch Tutorial"
                })
            }
        );

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        const data = await response.json();

        console.log("\n15. Real API Example");
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

// ====================================
// Run All Examples
// ====================================
async function main() {
    await basicGet();
    await statusCheck();
    await headersExample();
    await postRequest();
    await putRequest();
    await patchRequest();
    await deleteRequest();
    await customHeaders();
    await queryParams();
    await errorHandling();
    await timeoutExample();
    await textResponse();
    await jsonResponse();
    await parallelRequests();
    await apiExample();
}

main();