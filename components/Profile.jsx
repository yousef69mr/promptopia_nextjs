import PromptCardList from '@components/PromptCardList';

const Profile = (props) => {
  const { name, data, desc, handleEdit, handleDelete } = props;
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <PromptCardList
        data={data}
        handleTagClick={() => {}}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default Profile;
