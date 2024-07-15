import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import React, { Component } from 'react';
import { data } from './datasource';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <GridComponent dataSource={data} allowPaging={true} allowGrouping={true} allowSorting={true} allowFiltering={true} height={180}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' width='100' textAlign="Right" />
                    <ColumnDirective field='CustomerID' width='100' />
                    <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
                    <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
                    <ColumnDirective field='ShipCountry' width='100' />
                </ColumnsDirective>
                <Inject services={[Page, Sort, Filter, Group]} />
            </GridComponent>
            </div>
    );
  }
}
