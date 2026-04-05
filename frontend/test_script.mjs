fetch('http://localhost:3000/api/auth/sign-up/email', {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({email: 'test_node_user2@example.com', password: 'Str0ngPassword123!', name: 'Test User 2'})
})
.then(r => r.text().then(d => {
    console.log("STATUS:", r.status);
    console.log("BODY:", d);
}))
.catch(e => console.error("ERR:", e));
