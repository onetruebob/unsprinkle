import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const [avif1x, avif2x, avif3x, jpg1x, jpg2x, jpg3x] = [
    ".avif",
    "@2x.avif",
    "@3x.avif",
    ".jpg",
    "@2x.jpg",
    "@3x.jpg",
  ].map((newExt) => src.replace(".jpg", newExt));
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src}>
          <source
            type="image/avif"
            srcset={`
            ${avif1x} 1x,
            ${avif2x} 2x,
            ${avif3x} 3x
          `}
          />
          <source
            type="image/jpeg"
            srcset={`
            ${jpg1x} 1x,
            ${jpg2x} 2x,
            ${jpg3x} 3x
          `}
          />
          <img alt={alt} src={jpg1x} />
        </Image>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.picture`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 475;
  color: var(--color-gray-800);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export default PhotoGridItem;
