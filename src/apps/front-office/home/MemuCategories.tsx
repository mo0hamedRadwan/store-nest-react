export default function MemuCategories() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
    },
    {
      id: 2,
      name: "Clothing",
    },
    {
      id: 3,
      name: "Shoes",
    },
    {
      id: 4,
      name: "Books",
    },
  ];

  return (
    <>
      {categories.map(category => (
        <div key={category.id}>{category.name}</div>
      ))}
    </>
  );
}
