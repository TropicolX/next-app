import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

const Article_list = ({ articles }) => {
	return (
		<div className={articleStyles.grid}>
			{articles.map((article) => (
				<ArticleItem key={article.id} article={article} />
			))}
		</div>
	);
};

export default Article_list;
