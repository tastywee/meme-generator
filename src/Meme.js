export default function Meme() {
  return (
    <main>
      <form className="grid--container">
        <label for="top--text" className="grid--item-1">
          Top text
        </label>
        <input
          id="top--text"
          type="text"
          className="grid--item-3"
          placeholder="Shut up"
        />
        <label for="bottom--text" className="grid--item-2">
          Bottom text
        </label>
        <input
          id="bottom--text"
          type="text"
          className="grid--item-4"
          placeholder="And take my money"
        />
        <button className="grid--item-5">Get a new meme image 🖼</button>
        <img src="/troll-face.png" alt="meme images" className="grid--item-6" />
      </form>
    </main>
  );
}
