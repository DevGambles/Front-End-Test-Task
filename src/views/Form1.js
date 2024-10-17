import Card from "../components/Card";

const Form1 = ({onClose, formData, onChange}) => {
  return (
    <div className="w-2/3">
      <Card header="Form 1" onClose={() => onClose()}>
        <div className="w-full p-4 flex flex-col gap-8">
          <input
            type="text"
            name="field1"
            value={formData.field1}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Field number 1 - one line"
          />
          <input
            type="text"
            name="field2"
            value={formData.field2}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Field number 2 - one line"
          />
        </div>
      </Card>
    </div>
  );
}

export default Form1;