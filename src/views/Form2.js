import Card from "../components/Card";

const Form2 = ({onClose, formData, onChange}) => {
  return (
    <div className="w-2/3">
      <Card header="Form 2" onClose={() => onClose()}>
        <div className="w-full p-4 flex flex-col gap-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Question 1</label>
            <div className="flex items-center">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="checked1"
                  checked={formData.checked1}
                  onChange={onChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
              </div>
              <label className="ms-2 text-sm font-medium text-gray-900">
                Description 1<br />
                Checkbox 1
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Question 2</label>
            <div className="flex items-center">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="checked2"
                  checked={formData.checked2}
                  onChange={onChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
              </div>
              <label className="ms-2 text-sm font-medium text-gray-900">
                Description 2<br />
                Checkbox 2
              </label>
            </div>
          </div>
          <input
            type="text"
            name="field1"
            value={formData.field1}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Field number 1 - one line"
          />
        </div>
      </Card>
    </div>
  );
}

export default Form2;