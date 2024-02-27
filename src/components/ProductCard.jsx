import { Badge, Button, Card } from "keep-react";
export default function ProductCard(props) {
  const { thumbnail, title, price, description } = props.props;

  return (
    <Card
      className="max-w-xs overflow-hidden rounded-md"
      imgSrc={thumbnail}
      imgSize="md"
    >
      <Card.Container className="p-6">
        <Card.Container className="flex items-center justify-between">
          <Badge size="xs" colorType="light" color="gray">
            For Sale
          </Badge>
          <Card.Title>${price}</Card.Title>
        </Card.Container>
        <Card.Container className="my-3">
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Container>
        <Card.Container className="flex items-center justify-start gap-5">
          <Button size="sm" type="outlineGray">
            <span className="pr-2">Shoping</span>
            Add To Cart
          </Button>
        </Card.Container>
      </Card.Container>
    </Card>
  );
}
