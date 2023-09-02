import styles from './styles.css'
function App() {
  return (
    <>
      <div> 
        <header className={styles.header}>  
          <h1>Welcome to GitHub</h1>
        </header>
        <main className={styles.main}>
          <div className={styles.centralBox}></div>
            
    
            <h1>Friday</h1>
        </main>
        <footer className={styles.footer}>
          <p>This is end of the week</p>
        </footer>
      </div>
    </>
  )
}

export default App
