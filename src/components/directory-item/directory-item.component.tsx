import {
	BackgroundImage,
	DirectoryItemContainer,
	Body,
} from "./directory-item.styled";
import { DirectoryCategory } from "../directory/directory.component";

type CategoryItemProps = {
	category: DirectoryCategory;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
	const { imageUrl, title } = category;

	return (
		<DirectoryItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default CategoryItem;
