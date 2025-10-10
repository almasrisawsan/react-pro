function Panel({ title, id, isActive, setActive, children }) {
  console.log({ isActive });
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setActive(id)}>Show</button>
      )}
    </section>
  );
}

export default Panel;
