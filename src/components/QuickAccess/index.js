import React, { useState, useEffect } from "react";
import "./QuickAccess.css";
import Card from "@site/src/components/QuickAccess/QuickAccessCard";
import markdown from "markdown";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCards = searchQuery
    ? cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cards;

  useEffect(() => {
    // Dynamically load the markdown files
    const loadMarkdownFiles = async () => {
      const markdownFiles = await importAll(require.context("/docs", true, /\.md$/));

      const processedCards = await Promise.all(
        markdownFiles.map((file) => processMarkdown(file))
      );

      setCards(processedCards);
    };

    loadMarkdownFiles();
  }, []);

  const importAll = (context) => {
    const keys = context.keys();
    const files = keys.map(context);
    const nestedFiles = files.reduce((acc, file, index) => {
      const pathParts = keys[index].split('/');
      const directory = pathParts[1];
      const filename = pathParts[pathParts.length - 1];
      const filePath = `${directory}/${filename}`;
      
      return {
        ...acc,
        [filePath]: file.default
      };
    }, {});

    return Object.entries(nestedFiles).map(([path, content]) => ({
      path,
      content
    }));
  };

  const processMarkdown = (file) => {
    const md = require('markdown').markdown;
    const contentString = file.content.toString(); // Convert to string
    const tokens = md.parse(contentString);

    console.log(tokens)
  
    let title = "";
    let subtitle = "";
    let image = "";
    let content = "";
  
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
  
      if (token[0] === "header" && token[1].level === 1) {
        title = token[2][0];
      } else if (token[0] === "header" && token[1].level === 2) {
        subtitle = token[2][0];
      } else if (token[0] === "image") {
        image = token[1];
      } else if (token[0] === "para" && token[1] !== "") {
        content += token[1] + "\n";
      }
    }
  
    return {
      title,
      subtitle,
      image,
      content,
    };
  };
  

  return (
    <>
      <div className="title">Quick Access</div>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
      </div>
      {filteredCards.length > 0 ? (
        <div className="grid-container">
          {filteredCards.map((card, index) => (
            <a href={card.target} className="" key={card.title}>
              <Card
                title={card.title}
                image={card.image}
                description={card.content}
                subtitle={card.subtitle}
              />
            </a>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src="https://www.backblaze.com/blog/wp-content/uploads/2019/12/Incomplete-archives.jpg"
            alt="meme"
            className="w-full sm:w-1/2"
          />
        </div>
      )}
    </>
  );
};

export default Index;
