// Async/await

const getUserRepos = async () => {
  try {
    const user = await api.get('/users/diego3g');
    const repos = await api.get(`/repos/${user.id}`);
    repos.map((item, index) => console.log(`Posição: ${index}: ${item}`))  
  } catch (error) {
    console.error(error)
  }
}
