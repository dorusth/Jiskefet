import Link from 'next/link'

export default function About() {
    return (
        <div>
            <Link href="/" title="Index Page">
                <button>Home</button>
            </Link>
            <p>This is the about page</p>
        </div>
    );
}