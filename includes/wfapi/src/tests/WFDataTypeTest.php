<?php
require_once __DIR__."/../api/WFDataTypes.php";

use WF\Core\Api\WFDataTypes;

class WFDataTypeTest extends PHPUnit_Framework_TestCase {
  public function testWFDataTypes() {
    $this->assertEquals(true, WFDataTypes::isValid('string'));
    $this->assertEquals(true, WFDataTypes::isValid('sTrinG'));
    $this->assertEquals(true, WFDataTypes::isValid('number'));
    $this->assertEquals(true, WFDataTypes::isValid('NUMBER'));
    $this->assertEquals(true, WFDataTypes::isValid('date'));
    $this->assertEquals(true, WFDataTypes::isValid('Date'));
    $this->assertEquals(true, WFDataTypes::isValid('time'));
    $this->assertEquals(true, WFDataTypes::isValid('Time'));
    $this->assertEquals(true, WFDataTypes::isValid('datetime'));
    $this->assertEquals(true, WFDataTypes::isValid('DateTime'));
    $this->assertEquals(true, WFDataTypes::isValid('boolean'));
    $this->assertEquals(true, WFDataTypes::isValid('Boolean'));
    $this->assertEquals(true, WFDataTypes::isValid('binary'));
    $this->assertEquals(true, WFDataTypes::isValid('Binary'));
    $this->assertEquals(true, WFDataTypes::isValid('object'));
    $this->assertEquals(true, WFDataTypes::isValid('OBJECT'));
    $this->assertEquals(true, WFDataTypes::isValid('array'));
    $this->assertEquals(true, WFDataTypes::isValid('Array'));
    $this->assertEquals(true, WFDataTypes::isValid('any'));
    $this->assertEquals(true, WFDataTypes::isValid('ipaddress'));
    $this->assertEquals(true, WFDataTypes::isValid('MacAddress'));
    $this->assertEquals(true, WFDataTypes::isValid('eMail'));
    $this->assertEquals(true, WFDataTypes::isValid('url'));
    $this->assertEquals(true, WFDataTypes::isValid('regexp'));
    $this->assertEquals(true, WFDataTypes::isValid('text'));
    $this->assertEquals(true, WFDataTypes::isValid('teXT'));
    $this->assertEquals(true, WFDataTypes::isValid('ANY'));
    $this->assertEquals(false, WFDataTypes::isValid('float'));
    $this->assertEquals(false, WFDataTypes::isValid('blob'));
    $this->assertEquals(false, WFDataTypes::isValid('json'));
  }
}
?>
