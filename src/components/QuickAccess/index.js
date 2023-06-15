import React, { useState } from "react";
import "./QuickAccess.css";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const cards = [
    {
      title: "All new debian 12",
      subtitle: "The one and only",
      image: "img/debian-12.jpg",
      content: "Debian is a free and open-source operating system known for its stability and large software repository. In this comprehensive guide, we will explore the features and characteristics of Debian, guide you through the installation process, explain package management using APT, and provide tips for system administration and customization.",
      target: "docs/tutorial-extras/manage-docs-versions"
    },
    {
      title: "How to use Linux 101",
      subtitle: "Because it's too hard",
      image: "https://www.pengertianku.net/wp-content/uploads/2017/08/pengertian-linux.jpg",
      content: "In this tutorial, we will cover the basics of using Linux, including navigating the file system, running commands, managing processes, and more. We will provide step-by-step instructions and explanations to help you become familiar with Linux and its command-line interface.",
      target: "docs/intro"
    },
    {
      title: "All About Docusaurus",
      subtitle: "A Better Markdown",
      image: "https://docusaurus.io/img/docusaurus.svg",
      content: "Docusaurus is a documentation framework that makes it easy to build, deploy, and maintain documentation websites. In this comprehensive guide, we will dive into the features and benefits of Docusaurus, how to install and configure it, and how to create and customize your documentation using Markdown.",
      target: "docs/category/tutorial---basics"
    },
    {
      title: "Setup VirtualBox",
      subtitle: "Because you use windows",
      image: "https://telset.id/wp-content/uploads/2016/08/virtbox_1.jpg",
      content: "VirtualBox is a powerful virtualization software that allows you to run multiple operating systems on your Windows machine. This tutorial will walk you through the process of setting up VirtualBox, creating virtual machines, installing guest operating systems, and managing your virtual environment.",
      target: "docs/tutorial-basics/create-a-page"
    },
    {
      title: "Setup Putty",
      subtitle: "Since you can't copy paste in Unix",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PuTTY_Icon_upstream.svg/1200px-PuTTY_Icon_upstream.svg.png",
      content: "PuTTY is a popular SSH and Telnet client for Windows that provides a secure way to connect to remote servers and devices. In this tutorial, we will guide you through the installation and configuration of PuTTY, explain how to establish SSH connections, and demonstrate useful features like session management and key authentication.",
      target: "docs/tutorial-basics/create-a-document"
    },
    {
      title: "Bash 101",
      subtitle: "As if there aren't 50 Billion Tutorials Already",
      image: "https://www.codelivly.com/wp-content/uploads/2023/02/Que-es-Bash-Script.jpg",
      content: "Bash is a powerful scripting language commonly used in Unix-based systems. This tutorial aims to provide a beginner-friendly introduction to Bash scripting, covering the basics of variables, conditionals, loops, functions, and more. By the end, you'll have a solid foundation in writing and executing Bash scripts.",
      target: "docs/category/tutorial---extras"
    },
    {
      title: "All About Debian",
      subtitle: "It's an OS...",
      image: "https://www.debian.org/Pics/debian-logo-1024x576.png",
      content: "Debian is a free and open-source operating system known for its stability and large software repository. In this comprehensive guide, we will explore the features and characteristics of Debian, guide you through the installation process, explain package management using APT, and provide tips for system administration and customization.",
      target: "docs/tutorial-extras/manage-docs-versions"
    }
  ];

  const filteredCards = searchQuery
    ? cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cards;

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
      <div className="grid-container">
        {filteredCards.map((card, index) => (
          <a href={card.target} className="" key={card.title}>
            <article className="card" key={index}>
              <img src={card.image} alt="Place image here" />
              <div className="card_content">
                <span className="card_title">{card.title}</span>
                <span className="card_subtitle">{card.subtitle}</span>
                <p className="card_description">
                  {card.content.length > 200
                    ? `${card.content.substring(0, 200)}...`
                    : card.content}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </>
  );
};

export default Index;
