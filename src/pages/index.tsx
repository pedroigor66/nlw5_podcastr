// SPA (Single Page Application)
// useEffect(() => {
//   fetch("http://localhost:3333/episodes")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }, []);
// SSR (Server Side Rendering) same as current, but with getServerSiderProps()
// SSG (Static Site Generation) only works in production

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
