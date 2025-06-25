import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
// import MultipleThumbsSliderDemo from "../slider-15";
import RangeSliderDemo from "../slider-14";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ClothingSideBar = () => {
  return (
    <>
      <div className="m-3">
        {/* <Label className="font-bold text-xl py-4">Clothing Filters</Label> */}

        {/* Price */}
        <div>
          <Label className="text-xl">Price</Label>
          <br />
          {/* <MultipleThumbsSliderDemo /> */}
          <RangeSliderDemo />
        </div>

        {/* Category*/}
        <div className="space-y-4 mt-3 py-3">
          <Label className="text-xl">Category </Label>
          {/* Men's Clothing */}
          <div className="flex items-center space-x-2">
            <Checkbox id="mens-clothing" />
            <Label htmlFor="mens-clothing">Mens Clothing</Label>
          </div>
          {/* Women's Clothing */}
          <div className="flex items-center space-x-2">
            <Checkbox id="womens-clothing" />
            <Label htmlFor="womens-clothing">Women Clothing</Label>
          </div>
        </div>

        {/* Size*/}
        <div className="mt-3 py-3">
          <Label className="text-xl">Size</Label>
          <br />
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((size) => (
              <Button key={size} variant="outline">
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Rating*/}

        <div className="mt-3 py-3">
          <Label className="text-xl">Rating</Label>
          <br />
          <div className="flex gap-2">
            <RadioGroup>
              {[
                "4 Stars and above",
                "3 Stars and above",
                "2 Stars and above",
                "1 Star and above",
              ].map((rating) => (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={rating} id={rating} />
                  <Label htmlFor={rating}>{rating}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Sort By */}

        <div className="mt-3 py-3">
          <Label className="text-xl">Sort By</Label>
          <br />
          <div className="flex gap-2">
            <RadioGroup>
              {["Price - Low To High", "Price - High To Low"].map((rating) => (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={rating} id={rating} />
                  <Label htmlFor={rating}>{rating}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClothingSideBar;
