import getStories from "../lib/getStories";
import Page from "../components/Page";

export async function getStaticProps() {
  const posts = await getStories("askstories");
  return { props: { posts } };
}

export default function Ask({ posts }) {
  const [pageCount, setpageCount] = useState(1);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(
      <Page page={i + 1} initialData={i + 1 !== 1 ? null : posts} key={i} />
    );
  }

  return (
    <div className="container grid justify-center my-5">
      <h1 className="main-title">Ask Stories</h1>
      {pages}
      <button className="more-btn" onClick={() => setpageCount(pageCount + 1)}>
        Load more
      </button>
    </div>
  );
}
