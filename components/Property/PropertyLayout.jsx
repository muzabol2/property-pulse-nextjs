const PropertyLayout = ({ main, aside }) => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main className="flex flex-col gap-6">{main}</main>
          <aside className="space-y-4">{aside}</aside>
        </div>
      </div>
    </section>
  );
};

export { PropertyLayout };
