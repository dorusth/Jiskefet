import Link from 'next/link'
// links work with everything

const Index = () => (
    <div>
        <Link href="/about" title="About Page">
            <button>about</button>
        </Link>
        <p>Hello Next.js</p>
    </div>
);

export default Index;