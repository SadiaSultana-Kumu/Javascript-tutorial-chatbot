import ChatBox from './components/ChatBox/ChatBox';

function App() {
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <h1>Javascript Chat Bot&nbsp;</h1>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ChatBox />
    </div>
  </div>
  );
}

export default App;
