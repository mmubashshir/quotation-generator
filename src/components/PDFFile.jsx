import {
  Page,
  Text,
  View,
  Document,
  Image,
} from "../components/PDFComponents/styles";

import { Font } from "@react-pdf/renderer";
import isEmpty from "./checkEmpty";
import rupeesInWords from "./rupeesInWords";
import topbar from "../assets/topbar.png";
import head from "../assets/head.png";
import totalBack from "../assets/totalBack.png";
Font.register({
  family: "Hanken Grotesk",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_Ncs2da4fpNzXhRKA.ttf",
      fontWeight: 100,
    },
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_NcM2Za4fpNzXhRKA.ttf",
      fontWeight: 200,
    },
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_Nc7WZa4fpNzXhRKA.ttf",
      fontWeight: 300,
    },
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_Ncs2Za4fpNzXhRKA.ttf",
      fontWeight: 400,
    },
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_NcgWZa4fpNzXhRKA.ttf",
      fontWeight: 500,
    },
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_NcbWFa4fpNzXhRKA.ttf",
      fontWeight: 600,
    },
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_NcVGFa4fpNzXhRKA.ttf",
      fontWeight: 700,
    },
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_NcM2Fa4fpNzXhRKA.ttf",
      fontWeight: 800,
    },
    {
      src: "http://fonts.gstatic.com/s/hankengrotesk/v8/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_NcGmFa4fpNzXhRKA.ttf",
      fontWeight: 900,
    },
  ],
});

Font.register({
  family: "Schibsted Grotesk",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/schibstedgrotesk/v3/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNIsEAT8JuXFGVOQ.ttf",
      fontWeight: 400,
    },
  ],
});

const PDFFile1 = ({ pdfData, getFullLetterHead }) => {
  const { name, date, address } = pdfData.clientInfo;
  const { subtotal, gst, grandTotal, gstPercentage } = pdfData;
  const items = pdfData.items;
  // Checks if any weight and qty are present
  let weightsPresent = items.some((item) => !isEmpty(item.weight));
  let qtyPresent = items.some((item) => !isEmpty(item.qty));
  // Getting date in dd-mm-yyyy format
  const formatDate = (date) => {
    // const d = new Date();
    const d = date.split("-");
    const [day, month, year] = [d[2], d[1], d[0]];
    return `${day}-${month}-${year}`;
  };
  return (
    <Document>
      <Page>
        <Image className="flex top" value={topbar} fixed={true} />
        <Image className="flex -mt-35" value={head} />

        <View className="flex right px-25 pt-10">
          <Text className="w-100 bold paddingNone">GST: 340329840948</Text>
        </View>

        <View className="flex items-center px-25">
          <View className="w-50">
            <Text className="light paddingNone">INVOICE TO</Text>
            <Text className="medium fs-20 paddingNone">
              {name.toUpperCase()}
            </Text>
          </View>
          <View className="w-50 ">
            <Text className="fs-45 right semibold paddingNone">INVOICE</Text>
          </View>
        </View>

        <View className="flex px-25 py-10">
          <View className="w-50 fs-10 light gap-2">
            {address.split("\n").map((item, index) => (
              <Text className="paddingNone" key={index}>
                {item}
              </Text>
            ))}
            {/* <Text className="paddingNone">Manager Fauget Company</Text>
            <Text className="paddingNone">Phone: +123-456-7890</Text>
            <Text className="paddingNone">
              Email: hello@reallygreatsite.com
            </Text> */}
          </View>
          <View className="w-50 fs-10 gap-2 right">
            <Text className="paddingNone">Invoice Number: #002</Text>
            <Text className="paddingNone">Invoice Date: {date}</Text>
            <Text className="paddingNone">Due Date: {date}</Text>
          </View>
        </View>

        <View className="flex">
          <Image className="h-40 back w-100" value={topbar} />
          <View className="flex white items-center center h-40 medium px-25 gap-5 fs-14">
            <View className="w-60">
              <Text>{"Product Description".toUpperCase()}</Text>
            </View>
            <View className=" w-15">
              <Text>PRICE</Text>
            </View>
            <View className="  w-10">
              <Text>QTY</Text>
            </View>
            <View className=" w-15">
              <Text className="right">TOTAL</Text>
            </View>
          </View>
        </View>

        {items?.map((item) => (
          <View className="flex items-center center py-5 row light  fs-10 px-25 gap-5 ">
            <View className="w-60">
              <Text>{item.itemName}</Text>
            </View>
            <View className=" w-15">
              <Text>Rs {item.price}</Text>
            </View>
            <View className="  w-10">
              <Text>{item.qty}</Text>
            </View>
            <View className=" w-15">
              <Text className="right">₹ {item.price * item.qty}</Text>
            </View>
          </View>
        ))}
        <View wrap={false}>
          <View className="flex gap-5 px-25 light">
            <View className="w-68"></View>
            <View className="w-17">
              <Text>Subtotal</Text>
            </View>
            <View className="w-15">
              <Text className="right">₹{subtotal}</Text>
            </View>
          </View>

          <View className="flex gap-5 px-25 light">
            <View className="w-68"></View>
            <View className="w-17">
              <Text>Discount</Text>
            </View>
            <View className="w-15">
              <Text className="right">₹100</Text>
            </View>
          </View>

          <View className="flex gap-5 px-25 light">
            <View className="w-68">Hello</View>
            <View className="w-17">
              <Text>GST({gstPercentage.percent}%)</Text>
            </View>
            <View className="w-15">
              <Text className="right">₹{gst}</Text>
            </View>
          </View>

          <View className="flex items-center mt-10 h-40 px-25 white">
            <View className="w-68 dark pr-20">
              <Text className="semibold fs-15">Rupees(in words)</Text>
              <Text className="fs-10 light">
                One Thousand two hundred sixty only
              </Text>
            </View>
            <Image className="w-40 h-40 back right-0" value={totalBack} />
            <View className="w-16 ">
              <Text>Total</Text>
            </View>
            <View className="w-16 right">
              <Text>₹{grandTotal}</Text>
            </View>
          </View>
        </View>
        <View wrap={false} className="flex px-25 pt-10 ">
          <View className="w-80 light fs-10">
            <Text className="semibold fs-18">TERMS & CONDITIONS</Text>
            <Text className="pl-5"> • Lorem ipsum dolor sit amet.</Text>
            <Text className="pl-5"> • Lorem ipsum dolor sit amet.</Text>
            <Text className="pl-5"> • Lorem ipsum dolor sit amet.</Text>
          </View>
          <View className="w-20 medium gap-5 items-end">
            <Text className="row paddingNone border-dark"></Text>
            <Text className="center paddingNone">Authorized Signature</Text>
          </View>
        </View>

        <Image fixed={true} className="flex bottom" value={topbar} />
      </Page>
    </Document>
  );
};

export default PDFFile1;
