const headerStyle = {
  padding: '20px 0',
  lineHeight: '1.5em',
} as const;

const titleStyle = {
  fontSize: '6rem',
  fontWeight: '600',
  marginBottom: '2rem',
  lineHeight: '1em',
  color: '#ececec',
  textAlign: 'center',
} as const;

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Toodos</h1>
    </header>
  );
};

export default Header;
