import PromptCard from './PromptCard';

const PromptCardList = (props) => {
  const { data, handleTagClick, handleEdit, handleDelete } = props;

  return (
    <div className="mt-16 prompt_layout">
      {data?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={() => handleTagClick && handleTagClick(post?.tag)}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
