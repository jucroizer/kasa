function Tags(tags) {

  return <div className="kasa-logement-tags">
    {tags.tags.map((tag) => {
        return <p className="kasa-logement-tag">{tag}</p>
    })}
  </div>
}

export default Tags;
