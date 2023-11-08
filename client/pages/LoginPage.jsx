export default function LoginPage() {
  return (
    <div className="mt-5 bg-red-800">
      <h1 className="text-4xl text-center">Login</h1>
      <form>
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  )
}
