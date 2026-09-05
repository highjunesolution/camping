import { formatDate, formatNumber } from "@/utils/formats";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { FileText, RotateCw } from "lucide-react";

// Register font
Font.register({
  family: "Kanit",
  src: "/fonts/kanit/Kanit-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Kanit",
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  cellHeader: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
  },
  cell: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
  },
  total: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
});

const BookingInvoice = ({ booking }) => (
  <Document>
    <Page size={"A4"} style={styles.page}>
      {/* Invoice */}
      <View style={styles.section}>
        <Text style={styles.header}>highjunedev</Text>
        <Text>รหัสการจอง: {booking.id}</Text>
        <Text>ชื่อที่พัก: {booking.title}</Text>
        <Text>วันที่ออกใบเสร็จ: {formatDate(new Date())}</Text>
      </View>

      {/* ตารางแสดงรายละเอียด */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>จำนวนคืน</Text>
          <Text style={styles.cellHeader}>รวม</Text>
          <Text style={styles.cellHeader}>Check In</Text>
          <Text style={styles.cellHeader}>Check Out</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>{booking.totalNights}</Text>
          <Text style={styles.cell}>{formatNumber(booking.total)}</Text>
          <Text style={styles.cell}>{formatDate(booking.checkIn)}</Text>
          <Text style={styles.cell}>{formatDate(booking.checkOut)}</Text>
        </View>
      </View>

      {/* สรุปยอดรวม */}
      <View style={styles.section}>
        <Text style={styles.total}>ยอดรวม: {formatNumber(booking.total)} บาท</Text>
      </View>
    </Page>
  </Document>
);

const BookingPDF = ({ booking }) => {
  return (
    <PDFDownloadLink
      document={<BookingInvoice booking={booking} />}
      fileName={`invoice-${booking.id}.pdf`}
    >
      {({ loading }) =>
        loading ? <RotateCw className="animate-spin" /> : <FileText />
      }
    </PDFDownloadLink>
  );
};
export default BookingPDF;
