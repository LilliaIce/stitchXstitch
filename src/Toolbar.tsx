export default function Toolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar-section">
        <button className="toolbar-button">Select</button>
        <button className="toolbar-button">Transform</button>
        <button className="toolbar-button">Rotate</button>
        <button className="toolbar-button">Clear</button>
        <button className="toolbar-button">Fill</button>
        <button className="toolbar-button">Copy</button>
        <button className="toolbar-button">Cut</button>
        <button className="toolbar-button">Paste</button>
        <button className="toolbar-button">Outline</button>
        <button className="toolbar-button">Undo</button>
        <button className="toolbar-button">Redo</button>
      </div>
      <div className="toolbar-section">
        <label htmlFor="color-picker">Color:</label>
        <input 
          type="color" 
          id="color-picker" 
          className="color-picker"
        />
      </div>
    </div>
  );
}
