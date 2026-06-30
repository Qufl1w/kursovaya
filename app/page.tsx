export default function HomePage() {
  return (
    <main style={{ background: '#0f0f0f', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Навбар */}
      <nav style={{ background: '#141414', borderBottom: '0.5px solid #1e1e1e', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 9, height: 9, background: '#4ade80', borderRadius: '0%' }} />
          <span style={{ fontSize: 16, fontWeight: 500, color: '#4ade80' }}>PolitaevJS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="/courses" style={{ fontSize: 16, color: '#888', textDecoration: 'none' }}>Курсы</a>
          <a href="#" style={{ fontSize: 16, color: '#888', textDecoration: 'none' }}>О платформе</a>
          <a href="/login" style={{ fontSize: 16, color: '#888', textDecoration: 'none' }}>Войти</a>
          <a href="/register" style={{ fontSize: 16, color: '#0f0f0f', background: '#4ade80', padding: '6px 14px', borderRadius: 6, fontWeight: 500, textDecoration: 'none' }}>Начать</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '60px 24px 48px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#1a2e1a', color: '#4ade80', fontSize: 14, padding: '4px 12px', borderRadius: 20, marginBottom: 24, border: '0.5px solid #2d4a2d' }}>
          Платформа для JS-разработчиков
        </div>
        <h1 style={{ fontSize: 48, fontWeight: 500, color: '#f0f0f0', lineHeight: 1.25, marginBottom: 14 }}>
          Учись <span style={{ color: '#4ade80' }}>Node.js</span><br />с нуля до профи
        </h1>
        <p style={{ fontSize: 16, color: '#666', maxWidth: 400, margin: '0 auto 28px', lineHeight: 1.6 }}>
          Практические курсы по JavaScript, Node.js, Express и современному бэкенд-разработке
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <a href="/courses" style={{ background: '#4ade80', color: '#0f0f0f', fontSize: 16, fontWeight: 500, padding: '9px 20px', borderRadius: 7, textDecoration: 'none' }}>Смотреть курсы</a>
          <a href="#" style={{ background: 'transparent', color: '#888', fontSize: 16, padding: '9px 20px', borderRadius: 7, border: '0.5px solid #2a2a2a', textDecoration: 'none' }}>Как это работает</a>
        </div>
      </section>

      {/* Статистика */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 40, padding: 24, borderTop: '0.5px solid #1a1a1a', borderBottom: '0.5px solid #1a1a1a' }}>
        {[['12', 'курсов'], ['340+', 'студентов'], ['67', 'уроков']].map(([num, label]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 500, color: '#f0f0f0' }}>{num}</div>
            <div style={{ fontSize: 16, color: '#555', marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Курсы */}
      <section style={{ padding: '32px 24px' }}>
        <div style={{ fontSize: 20, fontWeight: 500, color: '#f0f0f0', marginBottom: 20, textAlign: 'center' }}>Популярные курсы</div>
        <div style={{ fontSize: 16, color: '#555', marginBottom: 20, textAlign: 'center' }}>Начни с основ или сразу перейди к практике</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1100, height: 250, margin: '0 auto' }}>
          {[
            { title: 'JavaScript основы', meta: '12 уроков · Начинающий', tag: 'JS' },
            { title: 'Node.js и Express', meta: '18 уроков · Средний', tag: 'Node' },
            { title: 'PostgreSQL и ORM', meta: '10 уроков · Средний', tag: 'SQL' },
          ].map((course) => (
            <a href="/courses" key={course.title} style={{ background: '#141414', border: '0.5px solid #1e1e1e', borderRadius: 10, padding: 24, textDecoration: 'none', display: 'block' }}>
              <div style={{ width: 48, height: 48, background: '#1a2e1a', borderRadius: 8, marginBottom: 12 }} />
              <div style={{ fontSize: 20, fontWeight: 500, color: '#e0e0e0', marginBottom: 4 }}>{course.title}</div>
              <div style={{ fontSize: 14, color: '#555', marginBottom: 10 }}>{course.meta}</div>
              <span style={{ background: '#1a2e1a', color: '#4ade80', fontSize: 12, padding: '2px 8px', borderRadius: 4 }}>{course.tag}</span>
            </a>
          ))}
        </div>
      </section>



      <footer style={{ 
        padding: '16px 24px', 
        display: 'flex', 
        justifyContent: 'space-between',
        borderTop: '0.5px solid #1a1a1a'
      }}>
        <div style={{
          textAlign: 'center',
          flex: 1
        }}>
          <span style={{ fontSize: 14, color: '#444' }}>PolitaevJS © 2025</span>
        </div>
        <a href="/courses" style={{ 
          fontSize: 16, 
          color: '#4ade80', 
          textDecoration: 'none'
        }}>Все курсы →</a>
      </footer>
    </main>
  )
}