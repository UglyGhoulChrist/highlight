import Video from "./Video";
import Article from "./Article";

function List(props) {
  return props.list.map((item, idx) => {
    switch (item.type) {
      case "video":
        return <Video key={idx} {...item} />;

      case "article":
        return <Article key={idx} {...item} />;
    }
  });
}

export default List;
