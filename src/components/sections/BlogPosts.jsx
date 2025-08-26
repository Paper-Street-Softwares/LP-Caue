import { useState, useEffect } from "react";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import content from "../../content/content";
import Paragraphs from "../sectionElements/Paragraphs";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/${content.texts.blog.blogLink}/posts/`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.posts)) // Ajustado para pegar a chave correta
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  return (
    <div>
      <SectionArea className="bg-bgSectionDark" id="blog">
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.blog.miniTag}
            sectionHeaderTitle={content.texts.blog.title}
            sectionHeaderSubtitle={content.texts.blog.subtitle}
            color=""
            titleColorSet="text-white"
            subtitleColorSet="text-white"
            type=""
          />
          <ul className="flex flex-wrap gap-[30px] justify-center mb-[80px]">
            {posts.slice(0, 3).map((post) => (
              <li key={post.ID}>
                <WordPressBlogCard
                  img={
                    post.featured_image && (
                      <img
                        src={post.featured_image}
                        alt="Imagem do post"
                        className="rounded-2xl"
                      />
                    )
                  }
                  title={
                    <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                  }
                  subtitle={
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          post.excerpt.length > 100
                            ? post.excerpt.substring(0, 100) + "..."
                            : post.excerpt,
                      }}
                    />
                  }
                  link={post.URL}
                />
              </li>
            ))}
          </ul>
          <MotionDivDownToUp>
            <Paragraphs className="text-center text-white underline transition hover:scale-110">
              <a
                href={`https://${content.texts.blog.blogLink}`}
                target="_blank"
              >
                {content.texts.blog.label}
              </a>
            </Paragraphs>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );

  // return (
  //   <div>
  //     <WordPressBlogCard />
  //     <h2>Últimas postagens</h2>
  //     <ul>
  //       {posts.map((post) => (
  //         <li key={post.ID}>
  //           <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
  //           <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
  //           {post.featured_image && (
  //             <img src={post.featured_image} alt="Imagem do post" width="300" />
  //           )}
  //           <a href={post.URL} target="_blank" rel="noopener noreferrer">
  //             Ler mais
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default BlogPosts;
