import { useRouter } from 'next/router'
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { getPostsForHome } from "../lib/api";
import { NextRequest, NextResponse } from 'next/server';

module.exports.user = "https://nextjs.org/docs/api-reference/next/router";
export default function Home({ posts }) {

  return (
    <>

      <div>
        <h1>
          Blog example
        </h1>
        <p>Blogging about stuff, mostly tech.</p>
      </div>

      <div className="post-div">
        <h2 style={{ marginBottom: "1rem" }}>Blog</h2>

        {posts.map(({ node }) => {
          return (
            <div className="post-card" key={node.slug}>
              <h3>{node.link}</h3>


            </div>
          );
        })}

      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <Link href="/blog">View all</Link>
      </div>


    </>
  );



}

export async function getStaticProps() {
  const posts = await getPostsForHome();

  return {
    props: { posts: posts.edges },
  };
}


