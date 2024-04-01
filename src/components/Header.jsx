import styled from "./Header.module.css";
function Header() {
  return (
    <>
      <div className={styled.header}>
        <div className={styled.subHeader}>
          <div className={styled.item}>
            <h1>QR code Generator</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
