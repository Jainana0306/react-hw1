export default function Content(props) {
    return (
      <ul>
        {props.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  