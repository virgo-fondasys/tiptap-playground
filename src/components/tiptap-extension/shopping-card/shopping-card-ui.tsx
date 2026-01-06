import { NodeViewWrapper, type ReactNodeViewProps } from "@tiptap/react";

export default function ShoppingCard(props: ReactNodeViewProps) {
  const { node, updateAttributes } = props;
  const attributes = node.attrs;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateAttributes({ [name]: value });
  };

  return (
    <NodeViewWrapper className="shopping-card-node-view-wrapper">
      <div className="shopping-card-form">
        {/* Title */}
        <h3 className="form-title">Shopping Card</h3>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={attributes.name}
            onChange={handleChange}
            placeholder="Product name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input
            type="url"
            id="url"
            name="url"
            value={attributes.url}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={attributes.description}
            onChange={handleChange}
            placeholder="Product description"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={attributes.price}
            onChange={handleChange}
            placeholder="0.00"
          />
        </div>
      </div>
    </NodeViewWrapper>
  );
}
